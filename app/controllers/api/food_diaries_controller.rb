class Api::FoodDiariesController < ApplicationController
  def show
    @food_diary = FoodDiary.find(params[:id])
    render :show
  end
end
