class Api::FoodLoggingsController < ApplicationController
  def create
    @food_logging = FoodLogging.new(logging_params)

    if @food_logging.save
      @food_diary = @food_logging.food_diary
      render "/api/food_diaries/show"
    else
      render json: @food_logging.errors.full_messages, status: 422
    end
  end

  def show
    @food_logging = FoodLogging.find(params[:id])
    render :show
  end

  def destroy
    @food_logging = FoodLogging.find(params[:id])
    @food_diary = @food_logging.food_diary
    @food_logging.destroy
    render "api/food_diaries/show"
  end

  def update
    @food_logging = FoodLogging.find(params[:id])

    if @food_logging.update(logging_params)
      @food_diary = @food_logging.food_diary
      render "/api/food_diaries/show"
    else
      debugger
      render json: @food_logging.errors.full_messages, status: 422
    end
  end

  private
  def logging_params
    params.require(:food_logging).permit(:servings, :meal, :food_id, :food_diary_id)
  end
end
