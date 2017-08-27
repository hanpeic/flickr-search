require 'rails_helper'

describe FlickrController do
  describe 'index' do
    it 'returns http success' do
      get :index

      expect(response).to be_success
       expect(response).to render_template(:index)
    end
  end

  describe 'search' do
    context 'when the params is invalid' do
      it 'returns empty' do
        get :search, q: ''

        expect(response).to render_template(nil)
      end
    end

    context 'when the params is valid' do
      before do
        expect(flickr).to receive_message_chain(:photos, :search).and_return([])
      end
      it 'returns photos' do
        xhr :get, :search, q: 'cat'

        expect(assigns(:photos_list)).to eq([])
        expect(response).to render_template(:search)
      end
    end
  end
end
