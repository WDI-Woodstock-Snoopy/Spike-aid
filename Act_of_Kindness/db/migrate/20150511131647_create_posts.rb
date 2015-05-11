class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :references
      t.string :users

      t.timestamps null: false
    end
  end
end
