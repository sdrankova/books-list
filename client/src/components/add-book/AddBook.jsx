export default function AddBook() {
    return (

        <section className="contact_section layout_padding-bottom ">
            <div className="container">
                <h2>
                    Add New Book
                </h2>
                <div className="row">
                    <div className="col-md-7">
                        <div className="form_container">
                            <form id="create" >
                                <input 
                                    type="text" 
                                    id="title" 
                                    name="title" 
                                    placeholder="Book title" />
                                <input 
                                    type="text" 
                                    id="author" 
                                    name="author" 
                                    placeholder="Author" />
                                <input 
                                    type="text" 
                                    id="genre" 
                                    name="genre" 
                                    placeholder="Genre" />
                                <input 
                                    type="text" 
                                    id="imageUrl" 
                                    name="imageUrl" 
                                    placeholder="Upload an image URL" />
                                <input 
                                    type="text" 
                                    id="your-opinion" 
                                    name="your-opinion" 
                                    className="message_input" 
                                    placeholder="Your opinion" />
                                <button>
                                    Send
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}