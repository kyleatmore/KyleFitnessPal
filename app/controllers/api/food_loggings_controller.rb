class Api::FoodLoggingsController < ApplicationController
  def show
    @food_logging = FoodLogging.find(params[:id])
    render :show
  end
end
