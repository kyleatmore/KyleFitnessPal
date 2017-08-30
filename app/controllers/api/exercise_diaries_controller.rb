class Api::ExerciseDiariesController < ApplicationController
  def show
    @exercise_diary = ExerciseDiary.find(params[:id])
    render :show
  end

  def find_diary
    @exercise_diary = ExerciseDiary.find_by(
      date: params[:date],
      user_id: current_user.id
    )

    if @exercise_diary
      render :show
    else
      @exercise_diary = ExerciseDiary.new(date: params[:date])
      @exercise_diary.user_id = current_user.id

      if @exercise_diary.save
        render :show
      else
        render json: @exercise_diary.errors.full_messages, status: 422
      end
    end
  end
end
