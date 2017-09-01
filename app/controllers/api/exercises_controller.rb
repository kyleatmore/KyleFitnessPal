class Api::ExercisesController < ApplicationController
  def create
    @exercise = Exercise.new(exercise_params)

    if @exercise.save
      render :show
    else
      render json: @exercise.errors.full_messages, status: 422
    end
  end

  def index
    @exercises = Exercise.all
    render :index
  end

  def search
    @exercises = Exercise.search_by_name(params[:query])
    render :index
  end

  private
  def exercise_params
    params.require(:exercise).permit(:name, :cals_burned_per_min)
  end
end
