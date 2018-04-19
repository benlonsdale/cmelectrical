import React, { Component } from 'react'
import axios from 'axios'
import Lightbox from 'react-images'
import Loader from './Loader'

export default class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = { images: [], lightboxIsOpen: false, currentImage: 0 }

        this.closeLightbox = this.closeLightbox.bind(this)
        this.gotoNext = this.gotoNext.bind(this)
        this.gotoPrevious = this.gotoPrevious.bind(this)
        this.gotoImage = this.gotoImage.bind(this)
        this.handleClickImage = this.handleClickImage.bind(this)
        this.openLightbox = this.openLightbox.bind(this)
    }

    componentDidMount() {
        this.fetchImages()
    }

    async fetchImages() {
        this.setState({fetching: true})
        let response = await axios({
            method: 'GET',
            url: `https://api.imgur.com/3/album/8bLRkdD/images`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Client-ID b28ef089d06e0f3',
            },
        }).catch(err => {
            console.log(err)
            // this.setState({fetching: false})
        })
        this.setState({ fetching: false })
        console.log(response)
        let images = response.data.data.map(image => ({ src: image.link }))
        this.setState({ images: images })
    }

    openLightbox(index, event) {
        event.preventDefault()
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        })
    }

    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        })
    }

    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        })
    }

    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        })
    }

    gotoImage(index) {
        this.setState({ currentImage: index })
    }

    handleClickImage() {
        if (this.state.currentImage === this.props.images.length - 1) return

        this.gotoNext()
    }

    renderGallery() {
        const { images } = this.state

        if (!images) return <Loader />

        const gallery = images.map((obj, i) => {
            return (
                <a
                    href={obj.src}                    
                    key={i}
                    onClick={e => this.openLightbox(i, e)}
                    style={{
                        flex: '0 0 120px'
                    }}
                >
                    <img
                        src={obj.src}
                        style={{
                            margin: '2px'
                        }}
                        // className={css(classes.source)}
                    />
                </a>
            )
        })

        return (
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            }}>
                {gallery}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderGallery()}
                <Lightbox 
                    images={this.state.images} 
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                    onClickImage={this.handleClickImage}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrevious}
                    onClickThumbnail={this.gotoImage}
                    onClose={this.closeLightbox}
                />
            </div>
        )
    }
}
