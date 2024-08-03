import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog";

import CustomIcon from "../icons";

export default function ProjectDetailsModal(props: {
    children: React.ReactNode;
}) {
    return (
        <Dialog>
            <DialogTrigger>{props.children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
    return (
        <>
            <div className="overlay" data-overlay></div>
            <div className="modal-container" data-modal-container>
                <section className="testimonials-modal">
                    <button className="modal-close-btn" data-modal-close-btn>
                        <CustomIcon icon="close-outline" />
                    </button>

                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <img
                                src="./assets/images/minilogo-webdevelopment.png"
                                alt="Daniel lewis"
                                data-modal-img
                            />
                        </figure>
                    </div>

                    <div className="modal-content"></div>

                    <section className="modal-bottom-bar">
                        <h3 className="h3 clients-title">Photos</h3>
                        <ul className="clients-list has-scrollbar">
                            <li className="clients-item">
                                <a href="#">
                                    <img
                                        src="./assets/images/logo-1-color.png"
                                        alt="client logo"
                                    />
                                </a>
                            </li>
                        </ul>
                    </section>
                </section>
            </div>
        </>
    );
}
