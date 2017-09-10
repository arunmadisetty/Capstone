class SchoolsController < ApplicationController

  def index
    # List of all the schools will be displayed here
    # @schools = School.all
    response_primary = Unirest.get("https://data.cityofchicago.org/resource/76dk-7ieb.json")
    @schools_primary = response_primary.body
    # response_2 = Unirest.get("https://data.cityofchicago.org/resource/y6yq-dbs2.json")
    # @neighborhoods = response_2.body

    render "index.html.erb"
  end

  def show
    school_id = params[:id]
    
  # School Progress Reports SY1617
    response_details = Unirest.get("https://data.cityofchicago.org/resource/iqnd-nmue.json")
    @school_details = response_details.body

  # School Profile Information SY1617
    response_show = Unirest.get(
      "https://data.cityofchicago.org/resource/76dk-7ieb.json",
      parameters: {"school_id" => school_id}
    )
    @school_primary = response_show.body[0]
    # @long_name = response_show.body.first["long_name"]

    render "show.html.erb"
  end


end
