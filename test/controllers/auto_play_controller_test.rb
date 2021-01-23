require 'test_helper'

class AutoPlayControllerTest < ActionDispatch::IntegrationTest
  test "should get URL" do
    get auto_play_URL_url
    assert_response :success
  end

end
