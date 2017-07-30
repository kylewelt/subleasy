module Api
  module V1
    class AuthController < ApplicationController
      before_action :authorize_user!, only: [:show]

      def create
        user = User.find_by(email: params[:email])
        if user.present? && user.authenticate(params[:password])
          created_jwt = issue_token({id: user.id})

          render json: {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            jwt: created_jwt
          }
        else
          render json: {
            error: 'Something went wrong. Please try again.'
          }, status: 404
        end
      end

      def show
        render json: {
          id: current_user.id,
          first_name: current_user.first_name,
          last_name: current_user.last_name
        }
      end
    end
  end
end
