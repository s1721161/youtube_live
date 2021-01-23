class CreateLiveinfos < ActiveRecord::Migration[5.1]
  def change
    create_table :liveinfos do |t|
      t.string :url
      t.string :title

      t.timestamps
    end
  end
end
