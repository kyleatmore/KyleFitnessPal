class Api::ExerciseLoggingsController < ApplicationController
  def create
    @exercise_logging = ExerciseLogging.new(logging_params)

    if @exercise_logging.save
      @exercise_diary = @exercise_logging.exercise_diary
      render "/api/exercise_diaries/show"
    else
      render json: @exercise_logging.errors.full_messages, status: 422
    end
  end

  def show
    @exercise_logging = ExerciseLogging.find(params[:id])
    render :show
  end

  def destroy
    @exercise_logging = ExerciseLogging.find(params[:id])
    @exercise_diary = @exercise_logging.exercise_diary
    @exercise_logging.destroy
    render "api/exercise_diaries/show"
  end

  def update
    @exercise_logging = ExerciseLogging.find(params[:id])

    if @exercise_logging.update(logging_params)
      @exercise_diary = @exercise_logging.exercise_diary
      render "/api/exercise_diaries/show"
    else
      render json: @exercise_logging.errors.full_messages, status: 422
    end
  end

  private
  def logging_params
    params.require(:exercise_logging).permit(:minutes, :exercise_id, :exercise_diary_id)
  end
end
