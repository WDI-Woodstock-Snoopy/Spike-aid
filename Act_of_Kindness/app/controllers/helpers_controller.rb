class HelpersController < ApplicationController
  def create
    helper = Helper.create( helper_params )
    helper.user = current_user
    helper.save
    redirect_to "/profile"
  end

  def destroy
    Helper.destroy(params[:id])
    redirect_to "/profile"
  end

  private

  def helper_params
    params.require(:helper).permit(:message)
  end

end
