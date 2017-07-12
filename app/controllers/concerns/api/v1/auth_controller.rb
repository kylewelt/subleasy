module Api
  module V1
    class AuthController < ApplicationController
      before_action :authorize_user!, only: [:show]

      def show
        render json: {
          id: current_user.id
        }
      end

      def create
        user = User.find_by(email: params[:email])
        if user.present? && user.authenticate(params[:password])
          created_jwt = issue_token({id: user.id})
          render json: {emai: user.email, jwt: created_jwt}
        else
          render json: {
            error: 'Something went wrong. Please try again.'
          }, status: 404
        end
      end

    end
  end
end
