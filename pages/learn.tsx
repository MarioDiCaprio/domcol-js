import styles from "../styles/Learn.module.scss";
import {NextPage} from "next";
import Base from "../components/Base/Base";
import MathJax from "../components/MathJax/MathJax";


const Learn: NextPage = () => {
    return (
        <Base title="DomcolJS | Learn">
            <div className={styles.context}>

                <div className={styles.content}>

                    <div className={styles.section}>
                        <h1>What is this website?</h1>
                        This website was created with the intention of easily plotting complex-valued functions.
                        More specifically, it utilizes a method called <i>Domain Coloring</i>. This was achieved
                        with <a href="https://www.opengl.org/">OpenGL</a>, implementing the below-described
                        algorithm using vertex- and fragment shaders.
                    </div>

                    <div className={styles.section}>
                        <h1>What is Domain Coloring?</h1>
                        Domain coloring is a method for plotting complex-valued functions. Consider this:
                        Let <MathJax raw math="f: \mathbb{C} \to \mathbb{C}" /> be a complex-valued function.
                        Since <MathJax raw math="\mathbb{C}" /> has two dimensions, we know
                        that <MathJax math="f" /> accepts two dimensions and outputs two more dimensions.
                        So now we have a total of four dimensions to visualize!

                        <h2>The Idea</h2>
                        Let's start with the first two dimensions, namely those given by the function's argument.
                        The argument can easily be visualized on the complex plane by mapping its real part
                        to the <MathJax math="x"/>-axis and its imaginary part to the <MathJax math="y"/>-axis.
                        For the function's output, things become a little bit tricky. Note that a complex number
                        of the form <MathJax math="a + bi"/> for some <MathJax raw math="a, b \in \mathbb{R}"/> can
                        be rewritten in its polar form: <MathJax raw math="a + bi = r(\cos \theta + \sin \theta)"/>,
                        where <MathJax raw math="\theta = \text{atan2}(\frac{b}{a})"/>. If we visualize this number
                        on the complex plane, as stated before, we will find the following: <MathJax math="r"/> is
                        the distance from the number to the origin and <MathJax raw math="\theta"/> is the angle from
                        the number to the <MathJax math="x"/>-axis. This output will not be mapped to a spacial
                        dimension, but to a color: Let <MathJax raw math="\text{hsv}"/> be some arbitrary function
                        that accepts hue, saturation and brightness as inputs and outputs a corresponding color.
                        Then our domain coloring is given by the following:
                        <MathJax display raw math="\text{Domcol}_f = (a, b, \text{hsv}(\theta, 1, r))"/>
                        Where each coordinate <MathJax math="(a, b)" /> is colored with its corresponding
                        color <MathJax raw math="\text{hsv}(\theta, 1, r)"/>.

                        <h2>Grid Decorations</h2>
                        Additionally, we can add decorative grids in order to better visualize certain properties
                        of the function. Currently, there are two types of grids:
                        <ul>
                            <li>
                                dark grid lines are colored whenever the real or imaginary part of the function
                                are integers
                            </li>
                            <li>
                                light grid lines are colored whenever the function doubles in magnitude
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </Base>
    );
}


export default Learn;
