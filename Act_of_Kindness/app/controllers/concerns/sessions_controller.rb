class SessionsController < ApplicationController

  # post '/session_log_in' => 'sessions#log_in_behavior'
  def log_in_behavior
    user = User.find_by(username: params[:username])
    if user && user.authenticate( params[:password] )
      session[:user_id] = user.id
      redirect_to "/profile"
    else
      redirect_to "/"
    end
  end

  # delete '/session_log_out' => 'sessions#log_out_behavior'
  def log_out_behavior
    session[:user_id] = nil
    redirect_to "/"
  end

end
