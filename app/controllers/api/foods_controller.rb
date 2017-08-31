class Api::FoodsController < ApplicationController
  def create
    @food = Food.new(food_params)

    if @food.save
      render :show
    else
      render json: @food.errors.full_messages, status: 422
    end
  end

  def index
    @foods = Food.all
    render :index
  end

  def search
    if params[:query] == ""
      @foods = Food.all
    else
      @foods = Food.search_by_name(params[:query])
    end
    
    render :index
  end

  private
  def food_params
    params.require(:food).permit(:brand, :name, :calories, :carbohydrates, :protein, :fats, :serving_size)
  end
end
