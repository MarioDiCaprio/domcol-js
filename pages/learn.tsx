import styles from "../styles/Learn.module.scss";
import {NextPage} from "next";
import Base from "../components/Base/Base";
import MathJax from "../components/MathJax/MathJax";
import {motion, MotionProps, Variants} from "framer-motion";


const sectionItemVariants: Variants = {
    before: {
        opacity: 0,
        translateX: -20
    },
    after: {
        opacity: 1,
        translateX: 0
    }
}

const sectionMotion: MotionProps = {
    initial: 'before',
    whileInView: 'after',
    viewport: { once: true },
    transition: {
        duration: 0.7,
        staggerChildren: 0.3
    }
}


const Learn: NextPage = () => {
    return (
        <Base title="DomcolJS | Learn" style={{ overflowX: 'hidden' }}>

            <div className={styles.context}>

                <motion.div
                    className={styles.section}
                    {...sectionMotion}
                    transition={{
                        ...sectionMotion.transition,
                        delayChildren: 0.7
                    }}
                >
                    <motion.h1 variants={sectionItemVariants}>
                        What is this website?
                    </motion.h1>
                    <motion.p variants={sectionItemVariants}>
                        This website was created with the intention of easily plotting complex-valued functions.
                        More specifically, it utilizes a method called <i>Domain Coloring</i>. This was achieved
                        with <a href="https://www.opengl.org/">OpenGL</a>, implementing the below-described
                        algorithm using vertex- and fragment shaders.
                    </motion.p>
                </motion.div>

                <motion.div
                    className={styles.section}
                    {...sectionMotion}
                    transition={{
                        ...sectionMotion.transition,
                        delayChildren: 1.4
                    }}
                >
                    <motion.h1 variants={sectionItemVariants}>
                        What is Domain Coloring?
                    </motion.h1>
                    <motion.p variants={sectionItemVariants}>
                        Domain coloring is a method for plotting complex-valued functions. Consider this:
                        Let <MathJax raw math="f: \mathbb{C} \to \mathbb{C}" /> be a complex-valued function.
                        Since <MathJax raw math="\mathbb{C}" /> has two dimensions, we know
                        that <MathJax math="f" /> accepts two dimensions and outputs two more dimensions.
                        So now we have a total of four dimensions to visualize!
                    </motion.p>

                    <motion.h2 variants={sectionItemVariants}>
                        The Idea
                    </motion.h2>
                    <motion.p variants={sectionItemVariants}>
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
                    </motion.p>

                    <motion.h2 variants={sectionItemVariants}>
                        Grid Decorations
                    </motion.h2>
                    <motion.p variants={sectionItemVariants}>
                        Additionally, we can add decorative grids in order to better visualize certain properties
                        of the function. Currently, there are two types of grids:
                    </motion.p>

                    <motion.ul variants={sectionItemVariants}>
                        <li>
                            dark grid lines are colored whenever the real or imaginary part of the function
                            are integers
                        </li>
                        <li>
                            light grid lines are colored whenever the function doubles in magnitude
                        </li>
                    </motion.ul>
                </motion.div>

                <motion.div className={styles.section}>
                    <h1>How do I plot functions?</h1>
                    Plotting a function is very easy: Simply open up the editor and define
                    your functions! Note that functions and variables consist of only one
                    letter. Also, the function that you want to plot should be prefixed with "@".

                    <h2>Built-In functions</h2>
                    You can utilize the following built-in functions:
                    <table>
                        <tbody>
                            <tr>
                                <th>Function</th>
                                <th>Syntax</th>
                                <th>Description</th>
                            </tr>
                            <tr>
                                <td><MathJax raw math="\sin" /></td>
                                <td><code>sin</code></td>
                                <td>Calculates the sine of the given number.</td>
                            </tr>
                            <tr>
                                <td><MathJax raw math="\cos" /></td>
                                <td><code>cos</code></td>
                                <td>Calculates the cosine of the given number.</td>
                            </tr>
                            <tr>
                                <td><MathJax raw math="\tan" /></td>
                                <td><code>tan</code></td>
                                <td>Calculates the tangent of the given number.</td>
                            </tr>
                            <tr>
                                <td><MathJax raw math="\sinh" /></td>
                                <td><code>sinh</code></td>
                                <td>Calculates the hyperbolic sine of the given number.</td>
                            </tr>
                            <tr>
                                <td><MathJax raw math="\cosh" /></td>
                                <td><code>cosh</code></td>
                                <td>Calculates the hyperbolic cosine of the given number.</td>
                            </tr>
                            <tr>
                                <td><MathJax raw math="\tanh" /></td>
                                <td><code>tanh</code></td>
                                <td>Calculates the hyperbolic tangent of the given number.</td>
                            </tr>
                            <tr>
                                <td><MathJax raw math="\sec" /></td>
                                <td><code>sec</code></td>
                                <td>Calculates the secant of the given number.</td>
                            </tr>
                            <tr>
                                <td><MathJax raw math="\csc" /></td>
                                <td><code>csc</code></td>
                                <td>Calculates the cosecant of the given number.</td>
                            </tr>
                            <tr>
                                <td><MathJax raw math="\cot" /></td>
                                <td><code>cot</code></td>
                                <td>Calculates the cotangent of the given number.</td>
                            </tr>
                            <tr>
                                <td><MathJax raw math="\text{cis}" /></td>
                                <td><code>cis</code></td>
                                <td>Defined as: <br/> <MathJax raw math="\text{cis}(x) = \cos(x) + i \sin(x)" /></td>
                            </tr>
                            <tr>
                                <td><MathJax raw math="\log" /></td>
                                <td><code>log</code></td>
                                <td>Calculates the logarithm (base <MathJax math="10" />)  of the given number.</td>
                            </tr>
                            <tr>
                                <td><MathJax raw math="\ln" /></td>
                                <td><code>ln</code></td>
                                <td>Calculates the natural logarithm of the given number.</td>
                            </tr>
                            <tr>
                                <td><MathJax raw math="\Re" /></td>
                                <td><code>Re</code></td>
                                <td>Extracts the given number's real part.</td>
                            </tr>
                            <tr>
                                <td><MathJax raw math="\Im" /></td>
                                <td><code>Im</code></td>
                                <td>
                                    Extracts the given number's imaginary part.
                                    Note that the returned number is real.
                                </td>
                            </tr>
                        </tbody>

                    </table>

                    <h2>Built-In constants</h2>
                    You can utilize the following built-in constants:
                    <table>
                        <tbody>
                            <tr>
                                <th>Function</th>
                                <th>Syntax</th>
                                <th>Description</th>
                            </tr>
                            <tr>
                                <td><MathJax raw math="\pi"/></td>
                                <td><code>pi</code></td>
                                <td>The number <MathJax raw math="\pi \approx 3.141592"/></td>
                            </tr>
                            <tr>
                                <td><MathJax raw math="e"/></td>
                                <td><code>e</code></td>
                                <td>The number <MathJax raw math="e \approx 2.718281"/></td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>Fractals</h2>
                    Currently, there is only one fractal available, namely the famous <i>Mandelbrot Set</i>.
                    To plot it, simply type <code>Mandelbrot</code> in the editor (Note: No prefix "@" and no
                    function definition, just the word!). It is colored using a technique called <i>orbit trap</i>.
                </motion.div>

            </div>
        </Base>
    );
}


export default Learn;
