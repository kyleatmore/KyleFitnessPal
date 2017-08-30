# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  email               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  height              :integer          not null
#  gender              :string           not null
#  birth_date          :date             not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ApplicationRecord

  validates :username, :email, uniqueness: true
  validates :username, :email, :password_digest, :session_token, :height,
            :gender, :birth_date, :goals, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validate :birth_date_cant_be_in_the_future

  has_attached_file :avatar, default_url: "user-icon.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/


  after_initialize :ensure_session_token

  attr_reader :password

  has_many :goals, inverse_of: :user
  accepts_nested_attributes_for :goals

  has_many :food_diaries
  has_many :food_loggings, through: :food_diaries
  has_many :foods, through: :food_diaries
  has_many :exercise_diaries

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    nil
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def birth_date_cant_be_in_the_future
    if self.birth_date > Date.today
      errors.add(:birth_date, "can't be in the future")
    end
  end

  def age
    age = Date.today.year - self.birth_date.year
    age -= 1 if Date.today < self.birth_date + age.year
    age
  end

  def current_goal
    self.goals.last
  end

  def calorie_allowance
    tdee = total_daily_energy_expenditure(self.current_goal)
    tdee + current_goal.calorie_modifier
  end

  def carb_allowance
    cals = (calorie_allowance * 0.5) / 4
    cals.round
  end

  def protein_allowance
    protein = (calorie_allowance * 0.2) / 4
    protein.round
  end

  def fat_allowance
    fat = (calorie_allowance * 0.3) / 9
    fat.round
  end

  private

  def harris_benedict_bmr(weight)
    if self.gender === "M"
      return 66 + (6.2 * weight) + (12.7 * self.height) - (6.76 * self.age)
    else
      return 655.1 + (4.35 * weight) + (4.7 * self.height) - (4.7 * self.age)
    end
  end

  def total_daily_energy_expenditure(goal)
    bmr = harris_benedict_bmr(goal.current_weight)
    (bmr * goal.activity_multiplier).round
  end
end
