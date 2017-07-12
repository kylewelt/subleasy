module Api
  module V1
    class UsersController < ApplicationController
      before_action :authorize_user!, only: [:show]

      def show
        render json: User.find_by(id: params[:id])
      end

      def create
        user = User.new(userParams)
        if user.save
          created_jwt = issue_token({id: user.id})
          render json: {id: user.id, jwt: created_jwt}
        else
          render json: {
            error: 'Something went wrong. Please try again.'
          }, status: 404
        end
      end

      private

      def userParams
        params.permit(:first_name, :last_name, :email, :password)
      end

    end
  end
end
