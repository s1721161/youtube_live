class AddVideoIdLiveinfos < ActiveRecord::Migration[5.1]
  def change
        add_column :liveinfos, :video_id, :string
  end
end
