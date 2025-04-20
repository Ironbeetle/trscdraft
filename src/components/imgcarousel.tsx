import { Carousel, CarouselContent, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";


export const Imgcarousel = ({children}: {children: React.ReactNode[]}) => {
    return (
        <Carousel>
            <div className="carousel-controlsP" style={{width:"max-content"}}>
                <CarouselPrevious />
            </div>
            <div className="carousel-controlsN">
                <CarouselNext />
            </div>
            <CarouselContent>
                {children}
            </CarouselContent>
        </Carousel>
    )
}