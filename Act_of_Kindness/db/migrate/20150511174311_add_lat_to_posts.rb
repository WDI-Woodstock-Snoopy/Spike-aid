class AddLatToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :lat, :string
  end
end
