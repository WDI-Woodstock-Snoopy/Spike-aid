class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.references :user
      t.string :title
      t.string :description
      t.string :tags
      t.integer :upvote
      t.string :location

      t.timestamps null: true
    end
  end
end
