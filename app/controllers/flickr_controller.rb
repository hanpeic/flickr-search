class FlickrController < ApplicationController
  def index
  end

  def search
    if params[:q].to_s.strip.length > 0
      @page = params[:page].to_i > 0 ? params[:page].to_i : 1
      @photos_list = flickr.photos.search(text: params[:q], page: @page, per_page: 20)
      render 'search'
    else
      render nothing: true
    end
  end
end
