class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def try
    @user = User.new(user_params)
    @user.valid?

    errors = []
    errors.push("Email #{@user.errors.messages[:email].first}") unless @user.errors.messages[:email].empty?
    errors.push("Password #{@user.errors.messages[:password].first}") unless @user.errors.messages[:password].empty?

    if errors.empty?
      render json: {}
    else
      render json: errors, status: 404
    end
  end

  private
  def user_params
    params.require(:user)
      .permit(
      :username, :password, :email, :height, :gender, :birth_date
      )
  end
end
