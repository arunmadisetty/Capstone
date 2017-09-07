class SavedSearchesController < ApplicationController
  def index
    @saved_searches = current_user.saved_searches.where(status: "saved")
    @saved_schools =[]
    @saved_searches.each do |search|
      response = Unirest.get("https://data.cityofchicago.org/resource/76dk-7ieb.json",
        parameters: {"school_id" => search.school_id}
        )
      @saved_schools << response.body[0]
    end
    render "index.html.erb"
  end

  def create

    saved_search = SavedSearch.new(
      user_id: current_user.id,
      school_id: school_id,
      status: "saved"
    )
    saved_search.save
    redirect_to "/savedsearch"
  end
end
