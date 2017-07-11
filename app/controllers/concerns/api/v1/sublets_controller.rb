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
      end

      def update
      end

      def destroy
      end

    end
  end
end
