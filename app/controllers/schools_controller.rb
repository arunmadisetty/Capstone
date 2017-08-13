class SchoolsController < ApplicationController
  def index
    # List of all the schools will be displayed here
    @schools = School.all
    render "index.html.erb"
  end

  def show
    # Individual page for one school or a compare page for multiple schools
    school_id = params[:id]
    @school = School.find_by(id: school_id)
    render "show.html.erb"
  end

end
