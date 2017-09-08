class Api::V1::SchoolsController < ApplicationController
  def index
    # @saved_searches.each do |search|
    response = Unirest.get("https://data.cityofchicago.org/resource/76dk-7ieb.json")
    @all_schools = response.body
    render "index.json.jbuilder"
  end

  def show
  end
end
