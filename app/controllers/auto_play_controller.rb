class AutoPlayController < ApplicationController

  def index
   @cids = Cid.all
  end

  def new

  end

  def show

  end

def create 
  @cid = Cid.new
  id = params[:cid][:channel_id]

if id.include?("https://www.youtube.com/channel/")
  id = id.last(24)
  @cid.channel_id = id
  @cid.save

elsif id.start_with?("UC")
  @cid.channel_id = id
  @cid.save
  
else
  f = 1

  end
end

  def URL
    @liveinfo = Liveinfo.all
    respond_to do|format|
      format.html
      format.json{@new_live = Liveinfo.where('id > ?', params[:message][:id])}
  end
end





end