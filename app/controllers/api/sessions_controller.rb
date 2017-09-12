class Api::SessionsController < ApplicationController
  def create
    @user = User
    .includes(
      food_diaries: [food_loggings: [:food]], exercise_diaries: [exercise_loggings: [:exercise]]
    ).find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid email or password. Please try again."], status: 401
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: ["No user to logout"], status: 404
    end
  end
end
