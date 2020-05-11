class YoutubeChannel < ApplicationCable::Channel
  def subscribed

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def live
     Liveinfo.destroy_all
        @GOOGLE_API_KEY="AIzaSyBgZhMD-48KuuxFQBApn_W70vjd6k-U_gY"
        @service = Google::Apis::YoutubeV3::YouTubeService.new
        @service.key = @GOOGLE_API_KEY
        next_page_token = nil
        cid = Cid.all

        cid.each do|event|
            puts event.channel_id
        opt1 ={
            channel_id: event.channel_id,
            event_type:"live",
            page_token: next_page_token,
            type: "video",
            max_results: "1",
            }
        @live = @service.list_searches(:snippet, opt1)

        @live.items.each do|item2|
        @snippet2 = item2.id
        @snippet3 = item2.snippet
        end
            if @live.nil? == true||  @live.blank? == true|| @live==" " || @live == nil || @snippet2.nil?

            else
        url = "https://www.youtube.com/watch?v="
        url += @snippet2.video_id

            @channel= url
            @title = @snippet3.title
            @pic = @snippet3.thumbnails.default.url
            @video_id = @snippet2.video_id
            puts @pic
            puts @title
            puts @video_id
            info = Liveinfo.new({url: @channel, title: @title, pic: @pic, vid: @video_id})
            info.save
            end
          end
  end
end
