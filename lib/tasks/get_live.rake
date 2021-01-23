namespace :get_live do
    desc "放送の取得"
    task :getlive => :environment do

        @GOOGLE_API_KEY="AIzaSyC0s6kSPaNLP94Dn3UXMic-uITLgrEMWv8"
        @service = Google::Apis::YoutubeV3::YouTubeService.new
        @service.key = @GOOGLE_API_KEY
        next_page_token = nil
        cid = Cid.all

        cid.each do|event|
        opt1 ={
            channel_id: event.channel_id,
            event_type:"upcoming",
            page_token: next_page_token,
            type: "video",
            max_results: "1",
            }
        @live = @service.list_searches(:snippet, opt1)

        @live.items.each do|item2|
        @snippet2 = item2.id
        @snippet3 = item2.snippet
        end
        url = "https://www.youtube.com/watch?v="
        url += @snippet2.video_id

        if @live.nil? == true||  @live.blank? == true|| @live==" " || @live == nil || @snippet2.nil? then

        else
            @channel= url
            @title = @snippet3.title
            puts @title
            info = Liveinfo.new({url: @channel, title: @title})
            info.save
        end
    end

    end
end
