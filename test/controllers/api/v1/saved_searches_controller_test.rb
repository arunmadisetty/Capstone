require 'test_helper'

class Api::V1::SavedSearchesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_saved_searches_index_url
    assert_response :success
  end

end
