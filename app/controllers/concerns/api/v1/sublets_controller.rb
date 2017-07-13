module Api
  module V1
    class SubletsController < ApplicationController
      before_action :authorize_user!, except: :index

      def index
        render json: Sublet.all
      end

      def show
        render json: Sublet.find_by(id: params[:id])
      end

      def create
        sublet = Sublet.new(subletParams)
        sublet.owner = current_user
        if sublet.save
          if params[:images].present?
            params.require(:images).each_with_index do |img, i|
              img = Image.create(params.require(:images)[i].permit(:url, :caption))
              sublet.images << img
            end
          end
          render json: {
            id: sublet.id
          }
        else
          render json: {
            error: 'Something went wrong. Please try again.'
          }, status: 404
        end
      end

      def update
      end

      def destroy
      end

      private

      def subletParams
        params.require(:sublet).permit(:name, :price, :start_date, :end_date, :description)
      end

    end
  end
end
