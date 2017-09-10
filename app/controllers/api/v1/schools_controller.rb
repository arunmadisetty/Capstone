class Api::V1::SchoolsController < ApplicationController
  def index
    # @saved_searches.each do |search|
    response_index = Unirest.get("https://data.cityofchicago.org/resource/76dk-7ieb.json")
    @all_schools = response_index.body
    render "index.json.jbuilder"
  end

  def show
    school_id = params[:id]
    response_show = Unirest.get("https://data.cityofchicago.org/resource/76dk-7ieb.json")
    @all_schools = response_show.body

    @all_schools.each do |school|
      if school["school_id"] == school_id
        @one_school = school
      end
    end  
    render "show.json.jbuilder"
  end
end
