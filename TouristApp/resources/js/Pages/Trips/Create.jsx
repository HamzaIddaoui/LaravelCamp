import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CheckCircleOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Row, Col, Divider, Button} from 'antd';
import { useEffect, useState } from 'react';

export default function CreateTrip({ auth }) {
    const [itineraries, setItineraries] = useState([{id:1,cityname : '' , date_start: '', date_end: ''}]);
    const {props} = usePage();
    const {data, setData, post,processing, errors, reset} = useForm({
        date_start: '',
        date_end: ''
    });

    useEffect(() => {
        return () => {
            reset();
            const nvitineraries = [{id:1,cityname : '' , date_start: '', date_end: ''}];
            setItineraries(nvitineraries);
        };
    }, []);

    const onFinish = (e) => {
        e.preventDefault();
        data['itineraries'] = itineraries;
        console.log(JSON.stringify(data));
        //console.log(JSON.stringify(itineraries));
        post(route('trips.store', data));
    };

    const getMaxId = () => {
        if(itineraries.length === 0){
            return 0;
        }
        return Math.max(...itineraries.map(itinerary => itinerary.id));
    }

    const addItinerary = () => {
        const newItinerary = {
            id : getMaxId() + 1 , 
            cityname: '',
            date_start: '',
            date_end: ''
        };
        setItineraries([...itineraries, newItinerary]);
    }

    const removeItinerary = (id) => {
        const updatedItinenaries = itineraries.filter(itinerary => itinerary.id !== id);
        setItineraries(updatedItinenaries);
    }

    const handlecitynameChanges = (id, value) => {
        const updatedItinerary = itineraries.map(itinerary => 
            itinerary.id === id ? {...itinerary, cityname: value} : itinerary);
        setItineraries(updatedItinerary);  
        //console.log("itineraries : " + JSON.stringify(itineraries));  
    }

    const handleDateStartChanges = (id, value) => {
        const updatedItinerary = itineraries.map(itinerary => 
            itinerary.id === id ? {...itinerary, date_start: value} : itinerary);
        setItineraries(updatedItinerary);  
       // console.log("itineraries : " + JSON.stringify(itineraries)); 
    }

    const handleDateEndChanges = (id, value) => {
        const updatedItinerary = itineraries.map(itinerary => 
            itinerary.id === id ? {...itinerary, date_end: value} : itinerary);
        setItineraries(updatedItinerary);  
        //console.log("itineraries : " + JSON.stringify(itineraries)); 
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Trips</h2>}
        >
            <Head title="Trips" />
            {props.success && ( <h1>{props.success}</h1>)}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <Row>
                            <Col lg={12} md={12} xs={24} sm={24}>
                                <span className='m-5 flex justify-center form-title'>
                                    Add Trip
                                </span>
                                <Divider/>
                            <form className='m-5' onSubmit={onFinish}>
                            <Row className='m-5 items-center'>
                                <Col lg={3} md={3} sm={3} xs={9}>
                                <img src='/images/calendar.png'/>
                                </Col>
                                <Col className='form-label' lg={7} md={9} sm={13} xs={13}>
                                    Date Start
                                </Col>
                                <Col lg={8} md={10} sm={12} xs={24}>
                                    <TextInput 
                                       type="date"
                                       id="date_start"
                                       name="date_start"
                                       isFocused={true}
                                       onChange={(e) => setData('date_start', e.target.value)}
                                    />
                                    <InputError message={errors.date_start}/>
                                </Col>
                            </Row>
                            <Row className='m-5 items-center'>
                                <Col lg={3} md={3} sm={3} xs={9}>
                                <img src='/images/calendar.png'/>
                                </Col>
                                <Col className='form-label' lg={7} md={9} sm={13} xs={13}>
                                    Date End
                                </Col>
                                <Col lg={8} md={10} sm={12} xs={24}>
                                    <TextInput 
                                       type="date"
                                       id="date_end"
                                       name="date_end"
                                       isFocused={true}
                                       onChange={(e) => setData('date_end', e.target.value)}
                                    />
                                    <InputError message={errors.date_end}/>
                                </Col>
                            </Row>
                            <Divider/>
                            {itineraries.map((itinerary, index) => (
                                <div key={itinerary.id}>
                                <Row className='flex justify-between'>
                                    <Col className='itinerary-title' lg={6} md={6} sm={12} xs={24}>
                                    Itinerary : {index+1}
                                    </Col>
                                    
                                    <Col lg={6} md={6} sm={12} xs={24}>
                                      <Button type='primary' className='flex items-center remove-itinerary-btn' onClick={() => removeItinerary(itinerary.id)}>
                                        <DeleteOutlined/>
                                        Remove
                                        </Button>
                                    </Col>
                                </Row>
                                <Row className='m-5 items-center'>
                                    <Col lg={3} md={3} sm={3} xs={9}>
                                        <img src='/images/location_fill.png'/>
                                    </Col>
                                    <Col className='form-label' lg={7} md={9} sm={13} xs={13}>
                                        City Name
                                    </Col>
                                    <Col lg={8} md={10} sm={12} xs={24}>
                                        <TextInput
                                         type="text"
                                         value={itinerary.cityname}
                                         onChange={(e) => handlecitynameChanges(itinerary.id, e.target.value)}
                                        />
                                    </Col>
                                </Row>

                                <Row className='m-5 items-center'>
                                    <Col lg={3} md={3} sm={3} xs={9}>
                                        <img src='/images/calendar.png'/>
                                    </Col>
                                    <Col className='form-label' lg={7} md={9} sm={13} xs={13}>
                                        Date Start
                                    </Col>
                                    <Col lg={8} md={10} sm={12} xs={24}>
                                        <TextInput
                                         type="date"
                                         value={itinerary.date_start}
                                         onChange={(e) => handleDateStartChanges(itinerary.id, e.target.value)}
                                        />
                                    </Col>
                                </Row>

                                <Row className='m-5 items-center'>
                                    <Col lg={3} md={3} sm={3} xs={9}>
                                        <img src='/images/calendar.png'/>
                                    </Col>
                                    <Col className='form-label' lg={7} md={9} sm={13} xs={13}>
                                        Date End
                                    </Col>
                                    <Col lg={8} md={10} sm={12} xs={24}>
                                        <TextInput
                                         type="date"
                                         value={itinerary.date_end}
                                         onChange={(e) => handleDateEndChanges(itinerary.id, e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                <Divider/>
                                </div>
                            ))}
                            <Row className='m-5 flex justify-between'>
                                <Col lg={6} md={6} sm={12} xs={24}>
                                   <Button onClick={addItinerary} type='primary' className='add-itinerary-btn flex items-center'>
                                    <PlusCircleOutlined/>
                                    Add Itinerary
                                   </Button>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={24}>
                                    <Button type='primary' className='save-trip-btn flex items-center' htmlType='submit'>
                                    <CheckCircleOutlined/>
                                    Save Trip
                                    </Button>
                                </Col>
                            </Row>
                            </form> 
                            </Col>
                            <Col lg={12} md={12} xs={24} sm={24}>
                                <img src='/images/addImage.avif'/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
