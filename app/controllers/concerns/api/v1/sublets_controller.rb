module Api
  module V1
    class SubletsController < ApplicationController

      def index
        render json: Sublet.all
      end

      def show
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
