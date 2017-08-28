class Api::FoodDiariesController < ApplicationController
  def show
    @food_diary = FoodDiary.find(params[:id])
    render :show
  end

  def find_diary
    @food_diary = FoodDiary.find_by(
      date: params[:date],
      user_id: current_user.id
    )

    if @food_diary
      render :show
    else
      @food_diary = FoodDiary.new(date: params[:date])
      @food_diary.user_id = current_user.id

      if @food_diary.save
        render :show
      else
        render json: @food_diary.errors.full_messages, status: 422
      end
    end
  end
end
