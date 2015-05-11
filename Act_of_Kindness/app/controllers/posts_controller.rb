class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end
  def create
    post = Post.create( params[:post] )
  end

  def edit
    @post = Post.find(params[:id])
  end
  def update
    post = Post.find(params[:id])
    post.update!( params[:post]  )
    redirect_to "/posts/#{ post.id }"
  end

  def show
    @post = Post.find(params[:id])
  end

  def destroy
    User.destroy( params[:id] )
    redirect_to "/users"
  end

end
