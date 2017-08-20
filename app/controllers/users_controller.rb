class UsersController < ApplicationController
  def new
    render "new.html.erb"
  end

  def create
    new_user = User.new(
      name: params[:name],
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )
    if new_user.save
      session[:user_id] = new_user.id
      flash[:success] = 'Successfully created account!'
      redirect_to '/schools'
    else
      flash[:warning] = 'Invalid email or password!'
      redirect_to '/signup'
    end
  end
end
