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
    # Individual page for one school or a compare page for multiple schools
    school_id = params[:id]
    response_details = Unirest.get("https://data.cityofchicago.org/resource/iqnd-nmue.json")
    @school_details = response_details.body
    # @school = School.find_by(id: school_id)
    response_show = Unirest.get(
      "https://data.cityofchicago.org/resource/76dk-7ieb.json",
      parameters: {"school_id" => school_id}
    )
    @school_primary = response_show.body[0]
    # @long_name = response_show.body.first["long_name"]

    render "show.html.erb"
  end


end
