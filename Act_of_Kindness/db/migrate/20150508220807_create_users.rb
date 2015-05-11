class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :password_digest
      t.integer :posts_count
      t.integer :upvotes_count
      t.integer :score
      t.string :location
      
      #need something for picture
      t.timestamps null: false
    end
  end
end
