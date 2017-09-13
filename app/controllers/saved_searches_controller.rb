class SavedSearchesController < ApplicationController
  def index
    @saved_searches = current_user.saved_searches.where(status: "saved")
    @saved_schools = []
    @saved_searches.each do |search|
      response = Unirest.get("https://data.cityofchicago.org/resource/iqnd-nmue.json",
        parameters: {"school_id" => search.school_id}
        )
      @saved_schools << response.body[0]
    end
    
    @saved_schools_detail = []
    @saved_searches.each do |search_detail|
      response_detail = Unirest.get("https://data.cityofchicago.org/resource/76dk-7ieb.json",
        parameters: {"school_id" => search_detail.school_id}
        )
      @saved_schools_detail << response_detail.body[0]
    end
    render "index.html.erb"
  end

  def create

    saved_search = SavedSearch.new(
      user_id: current_user.id,
      school_id: params[:school_id],
      status: "saved"
    )
    saved_search.save
    redirect_to "/savedsearch"
  end

  def destroy
    school_id = params[:id]
    @school = SavedSearch.find_by(school_id: school_id)
    @school.destroy
    flash[:danger]="School deleted."
    redirect_to "/savedsearch"
  end
end
