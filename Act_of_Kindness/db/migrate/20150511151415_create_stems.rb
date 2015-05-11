class CreateStems < ActiveRecord::Migration
  def change
    create_table :stems do |t|
      t.references :post

      t.timestamps null: false
    end
  end
end
