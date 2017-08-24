# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  height          :integer          not null
#  gender          :string           not null
#  birth_date      :date             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  validates :username, :email, uniqueness: true
  validates :username, :email, :password_digest, :session_token, :height,
            :gender, :birth_date, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validate :birth_date_cant_be_in_the_future


  after_initialize :ensure_session_token

  attr_reader :password

  has_many :goals
  has_many :food_diaries
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
  end
end
