class AddLongToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :long, :string
  end
end
