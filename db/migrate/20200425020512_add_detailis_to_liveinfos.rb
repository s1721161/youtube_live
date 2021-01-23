class AddDetailisToLiveinfos < ActiveRecord::Migration[5.1]
  def change
    add_column :liveinfos, :vid, :string
  end
end
