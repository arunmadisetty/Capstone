class Api::V1::SavedSearchesController < ApplicationController
  def index
    @saved_searches = current_user.saved_searches.where(status: "saved")
    @saved_schools =[]
    @saved_searches.each do |search|
      response = Unirest.get("https://data.cityofchicago.org/resource/76dk-7ieb.json",
        parameters: {"school_id" => search.school_id}
        )
      @saved_schools << response.body[0]
    end
    render "index.json.jbuilder"
  end
end
