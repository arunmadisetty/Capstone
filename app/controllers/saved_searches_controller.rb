class SavedSearchesController < ApplicationController
  def index
    @saved_searches = current_user.saved_searches.where(status: "saved")
    render "index.html.erb"
  end

  def create
    saved_search = SavedSearch.new(
      user_id: current_user.id,
      school_id: params[:input_school_id],
      status: "saved"
    )
    saved_search.save
    redirect_to "/savedsearch"
  end
end
